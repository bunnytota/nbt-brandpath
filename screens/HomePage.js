import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {fetchapilogin} from '../Redux/action/myaction'

const HomePage = () => {
  const { name, password, curry, error, loading } = useSelector((state) => state.curryy);
  const dispatch = useDispatch();
  //dispatch(fetchapilogin(name, password)); 




  useEffect(() => {
    if (name && password) {
      dispatch(fetchapilogin(name, password));
    }
  }, [name, password, dispatch]);
  // const onRefresh = () => {
  //   if (name && password) {
  //     dispatch(fetchapilogin(name, password)); 
  //   }
  // };

  return (
    // <ScrollView 
    //   style={styles.container}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={loading}
    //       onRefresh={onRefresh}
    //     />
    //   }
    // >
       <ScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        
    <Text>sarmad please run the sever...</Text>
        
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error: {error}</Text>
          </View>
        ) : (
          <>
            <View >
              <Text >User:</Text>
              <Text >{name}</Text>
            </View>

            {curry && (
              <View style={styles.dataContainer}>
                <Text >API Response:</Text>
                <View >
                  <Text>{JSON.stringify(curry, null, 2)}</Text>
                </View>
              </View>
            )}
          </>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  loadingContainer: {
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
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
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  dataContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  responseContainer: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 4,
    marginTop: 5,
  },
});

export default HomePage;