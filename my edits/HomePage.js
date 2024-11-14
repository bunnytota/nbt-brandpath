import React, { useEffect,useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput
  
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {fetchapilogin} from '../Redux/action/auth'
import Logo from '../components/Logo';
import Button from '../components/Button';
import LineargradientCom from '../components/LineargradientCom';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Clock from '../components/Clock'
import LinearGradient from 'react-native-linear-gradient';

const HomePage = ({navigation}) => {

  const [isFocused, setIsFocused] = useState(false);

  const { name, password, user,screen, error } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  //dispatch(fetchapilogin(name, password)); 




  useEffect(() => {
    if (name && password) {
      dispatch(fetchapilogin(name, password));
    }
  }, [name, password, dispatch]);


  const handlenavigation =(screen)=>(
    navigation.navigate(screen)
  )

  // Log the screen data to see the API response
  console.log(screen); // Log the screen data to see the API response

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
       <ScrollView  >
      <View style={styles.container}>
       
        
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Error: {error}</Text>
          </View>
        ) :
        
        screen==null ?(
          <>
          
         <View
         style={styles.AzureErrorContainer}
         >
          
          <Text
          style={styles.AzureError}
         >{user?.errorDetail}</Text> 
         <Text 
         style={styles.AzureError2}
         >{user?.errorText}</Text>
          
          
          
          </View>
          </>
        )
        
        :
        
        (
          <>
            
            <View style={styles.container}>
         <LineargradientCom />
         <Text style={[styles.logo,styles.LogoText]}>BrandHub</Text>
         <View style={styles.roundcontainer}>
          <View style={styles.roundedcontent}>
          <Text style={styles.roundedfont}>
            <FontAwesome
             size={15}
             solid={true}
             color='seagreen'
            name='map-marker-alt'
            />
            <Text> </Text>

            Location</Text>

          <Text style={styles.roundedfont}>
          <FontAwesome
          size={15}
          color='seagreen'
          solid={true}
         name='map'
          
          /><Text> </Text>
             Partner</Text>
          </View>
         </View>
         <View  style={styles.formContainer}>
         
         <View style={styles.namebar}>
         <Text style={styles.text}><FontAwesome 
         name="user" size={15} color="seagreen" solid={true}
          style={styles.nameicon}
         />  Hello: <Text style={styles.bold}>{user?.username.charAt(0).toUpperCase() + user.username.slice(1) }</Text></Text>
         
          
          <Text>
            
            <FontAwesome 
         name="clock" size={15} color="seagreen" solid={false}
          style={styles.nameicon}
           
          />
        <Text>  Time:</Text>
          <Clock style={styles.clock}/>
         </Text>
         </View>
         <View>

         
         <View style={ styles.vertical}>        
           {screen?.length > 0 ? (
           screen.map((button, index) => (
             <TouchableOpacity
             
               onPress={()=>{handlenavigation(button.navigation)}}
               key={button.name}
             
           
               style={[
                 styles.menuButton,
                
                 { backgroundColor: button?.style?.backgroundColor }
               ]}
               vertical={true}
             >
               <FontAwesome
               
                name={button.iconName}
                 size={24}
                 color="#fff"
                 style={[styles.verticalIcon]}
                 solid={false}

               />
               <Text style={styles.buttonText}>{button.name}</Text>
             </TouchableOpacity>
             
           ))
         ) : (
           <Text>No buttons available</Text>
         )}
         </View>

         
         </View>
         
         
       <View style={styles.buttonContainer}>
         <Button
        //   onPress={formik.handleSubmit}
        //   isSubmitting={formik.isSubmitting}
          iconName="info"
          value='Version'
        
        />

<Button
        
        //   onPress={formik.handleSubmit}
        //   isSubmitting={formik.isSubmitting}
         
        // onPress={isAuthenticated==false}
        iconName="logout"
          value='Logout'
        
        />
</View>


         </View>
     

         <View style={[styles.inputContainer, error && styles.inputError,
           

         ]}>
     
      <TextInput
      
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}

        style={[styles.input, styles.placeholder]}
        
      />
       <LinearGradient colors={['#0175b2', '#4b3d91']} style={styles.inputIcon}>
        <FontAwesome 
        name="edit"
        size={20} color="#ffff" />
      </LinearGradient>
    </View>


     
    </View>

   

         </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({


  roundedfont:{

    fontWeight: 'bold'

  }
,
logo:{

  marginTop: 40,
  color: 'white',
  marginBottom:20,
  fontSize: 40,
  //fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: '18 Khebrat Musamim Regular',
},



  roundcontainer:{
    width: 370,
    height: 55,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 30,

  },


 

  roundedcontent:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight:20,
    marginTop: 7,
    fontWeight: 'bold'
  },



  AzureErrorContainer:{
    display: 'flex',
    flex: 1,
    marginTop: 300, 
    alignItems: 'center',
    justifyContent:'space-between'
  },



  AzureError:{
    
    alignItems: 'center',
    justifyContent: 'center',



  },

AzureError2:{

  
  marginTop : 30,
    alignItems: 'center',
    justifyContent: 'center',

}

  ,


  namebar:{
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-around'
  },
  
  menuButton:{
    height: 90, 
    width: 160,
    margin: 4,
    
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7,

  },
  
  verticalIcon: {
    marginBottom: 2,
  },
  text:{
    fontWeight:'600',
    marginBottom: 7,
  },

  container: {

    justifyContent: 'center',
    alignItems: 'center',
   
    height:'100%' // Replace with your custom background color
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  
  vertical: {
   
    flexDirection: 'row',
  
  
    flexWrap: 'wrap',
    
    
    // Space out the buttons
    alignItems: 'center',
    justifyContent:'center'
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
 
  dataApi: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  formContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 16,
    paddingTop: 15,
    
    zIndex: 10,
    marginBottom: '5%',
    paddingBottom: 15,

   
    //marginTop: 35,
  } ,
  buttonContainer:{

    marginTop: 80,
    margin:20,
  }


  ,buttonText:{
     color: 'white',
     fontWeight: 'bold',
  }

  ,bold:{
    fontWeight: 'bold'
  }

,
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'green',
    width: 370,
    height: 43,
    backgroundColor: '#fff',
     borderWidth:1,
     borderColor: 'green',
    borderRadius: 24,
    
  },
  inputIcon: {
    height: 37,
    width: 37,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:1,
  },
  input: {
    flex: 1,
    paddingBottom: 8,
    fontSize: 18,
    
    marginLeft: 4,
    width: '80%',
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    
    fontSize: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  changepin: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },



});

export default HomePage;