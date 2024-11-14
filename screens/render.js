import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fetchapilogin } from '../Redux/action/auth';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = (width - 60) / 2; // 2 columns with padding

const HomePage = () => {
  const { name, password, user, screen, error } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name && password) {
      dispatch(fetchapilogin(name, password));
    }
  }, [name, password, dispatch]);

  const renderMenuButton = (button) => {
    return (
      <TouchableOpacity
        key={button.name}
        style={[
          styles.menuButton,
          { backgroundColor: button.style.backgroundColor || '#ffffff' }
        ]}
        onPress={() => {
          // Handle button press based on action type
          if (button.action.type === 'API_CALL') {
            // Implement API call logic here
            console.log(`Making API call to: ${button.action.url}`);
          }
        }}
      >
        <Icon
          name={button.iconName}
          size={24}
          color="#ffffff"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>{button.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.username}>Welcome, {user?.result?.username}</Text>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error: {error}</Text>
          </View>
        ) : (
          <View style={styles.menuGrid}>
            {screen?.buttons?.map(renderMenuButton)}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  errorText: {
    color: '#c62828',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  menuButton: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    margin: 5,
    borderRadius: 12,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonIcon: {
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomePage;