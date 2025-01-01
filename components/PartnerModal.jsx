import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import Search from './Search';
const PartnerModal = ({ visible, onClose, partnerList,onSelect }) => {
 
  const [search, setSearch] = useState('');
  const { partnerlist } = useSelector(state => state.auth);
  const  [partner,setPartner] = useState('')

  //  
// const filteredPartners = partnerlist?.data?.filter(item =>
//   item.name?.toLowerCase().includes(searchTerm.toLowerCase())
// );

const handleClose = () => { //to close and clear
  setSearch(''); // Clear search when modal closes
  onClose(); // to close
};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>{' '}Select Partner</Text>
            <TouchableOpacity onPress={handleClose}>
              <FontAwesome name="times" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <Search
            placeholder={'Search Partner ...'}
            value={search}
          onChangeText={setSearch}
          
          />

          {/* <View style={styles.searchContainer}>
            <FontAwesome name="search" size={15} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search partner..."
              placeholderTextColor="#999"
              value={search}
          onChangeText={setSearch}
            />
          </View> */}

          <ScrollView 
            style={styles.partnerList}
            showsVerticalScrollIndicator={false}
          >
            {/* {partnerlist?.data
            ?.filter(item => item.name.includes(search.toUpperCase()))
            .map(item => (
              <TouchableOpacity
                key={item.partnerID}
                style={styles.partnerItem} 
                 onPress={() => {
               onSelect(item)
               handleClose()
                }}
              >
                <Text style={styles.partnerText}>{item.name}</Text>
              </TouchableOpacity>
            ))} */}

 {/* {partnerlist?.data?.filter(item => item.name.includes(search.toUpperCase())
.length === 0 ? (
  <View style={styles.noResultContainer}>
      <Text style={styles.noResultText}>No Results Found</Text>
    </View>
):(

  partnerlist?.data?.filter(item => item.name.includes(search.toUpperCase())).map(item => (
    <TouchableOpacity
      key={item.partnerID}
      style={styles.partnerItem} 
       onPress={() => {
     onSelect(item)
     handleClose()
      }}
    >
      <Text style={styles.partnerText}>{item.name}</Text>
    </TouchableOpacity>
  ))
)) 
}  */}


{partnerlist?.data?.filter(item => 
  item.name.includes(search.toUpperCase())
).length === 0 ? (
  <View style={styles.noResultContainer}>
    <Text style={styles.noResultText}>No Results Found</Text>
  </View>
) : (
  partnerlist?.data?.
    filter(item => item.name.includes(search.toUpperCase()))
    .map(item => (
      <TouchableOpacity
        key={item.partnerID}
        style={styles.partnerItem}
        onPress={() => {
          onSelect(item)
          handleClose()
        }}
      >
       <Text style={styles.partnerText}>{item.name}</Text>
      </TouchableOpacity>
    ))
)}

            
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  noResultText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500'
  },
  
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContainer: {
    flex:1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 30,
    maxHeight: '75%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color:'black'
  },
  // searchContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 10,
  //   borderRadius: 25,
  //   marginHorizontal: 15,
  //   marginBottom: 10,
  //   backgroundColor: '#f5f5f5',
  // },
  // searchIcon: {
  //   marginHorizontal: 10,
  // },
  // searchInput: {
  //   flex: 1,
  //   padding: 8,
  //   fontSize: 16,
  // },


  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
  
    borderWidth: 1, 
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 20,
    // backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    marginHorizontal:7 ,
  },
  searchInput: {
    flex: 1,
    padding: 3,
    fontSize: 16,
  },
  partnerList: {
   
    maxHeight: '80%',
  
    paddingHorizontal: 20,
  },
  // partnerList: {
  //   maxHeight: '70%',
  //   paddingHorizontal: 15,
  // },
  partnerItem: {
    paddingVertical: 12,
  },
  partnerText: {
    fontSize: 16,
  },
});

export default PartnerModal;
