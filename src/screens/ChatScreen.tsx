// src/ChatScreen.tsx

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {fetchGeminiResponse} from '../utils/services/geminiService';
import Logo from '../components/Logo';
import colors from '../constants/colors';

interface Message {
  id: string;
  text: string;
  user: 'user' | 'bot';
}

interface HistoryPart {
  role: 'user' | 'model';
  parts: {text: string}[];
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am a Gemini-powered AI. How can I help you?',
      user: 'bot',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim().length === 0 || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      user: 'user',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const history: HistoryPart[] = messages.map(msg => ({
        role: msg.user === 'user' ? 'user' : 'model',
        parts: [{text: msg.text}],
      }));

      const botResponseText = await fetchGeminiResponse(
        userMessage.text,
        history,
      );

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        user: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, something went wrong.',
        user: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.user === 'user'
          ? styles.userMessageContainer
          : styles.botMessageContainer,
      ]}>
      <Text
        style={
          item.user === 'user' ? styles.userMessageText : styles.botMessageText
        }>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Logo />
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
        />
        {isLoading && (
          <View style={styles.typingIndicatorContainer}>
            <Text style={styles.typingIndicatorText}>AI is typing...</Text>
            <ActivityIndicator size="small" color="#007AFF" />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask the AI anything..."
            placeholderTextColor="#999"
            editable={!isLoading}
          />
          <TouchableOpacity
            style={[styles.sendButton, isLoading && styles.disabledButton]}
            onPress={handleSend}
            disabled={isLoading}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Screen width for adaptive message bubble size
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.primaryGreen,
    borderBottomWidth: 0.5,
  },
  messageList: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
    maxWidth: SCREEN_WIDTH * 0.75,
  },
  botMessageContainer: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    backgroundColor: colors.primaryGreen,
    alignSelf: 'flex-end',
  },
  botMessageText: {
    fontSize: 16,
    color: '#000',
  },
  userMessageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#f0f0f0',
    borderRadius: 22,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: colors.primaryGreen,
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
  typingIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 8,
  },
  typingIndicatorText: {
    marginRight: 8,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default ChatScreen;
