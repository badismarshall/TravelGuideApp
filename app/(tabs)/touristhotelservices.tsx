import { LinearGradient } from 'expo-linear-gradient';
import {
  Building2,
  Globe,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Users2
} from 'lucide-react-native';
import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface TourCompany {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  phone2?: string;
  phone3?: string;
}

interface GovernmentOffice {
  id: number;
  name: string;
  emails: string[];
  website?: string;
  landline: string;
  landline2?: string;
  fax: string;
}

interface TouristAssociation {
  id: number;
  name: string;
  address: string;
  phone: string;
  emails: string[];
}

interface Hotel {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  phone2?: string;
}

const tourCompanies: TourCompany[] = [
  {
    id: 1,
    name: 'Djarat Tours',
    address: 'B.P 22 Illizi',
    email: 'djarat-tours@linuxmail.org',
    phone: '0663 31 42 08',
    phone2: '0772 72 13 29',
  },
  {
    id: 2,
    name: 'Adredje Tours',
    address: 'B.P 40 Illizi',
    email: 'adredje@gmail.com',
    phone: '0660 36 96 00',
  },
  {
    id: 3,
    name: 'Sahari du Monde Tourisme',
    address: 'Hai Ain elkourse Illizi',
    email: 'idabir290@gmail.com',
    phone: '0550 09 12 85',
  },
  {
    id: 4,
    name: 'Tasrirte',
    address: 'Hai Al-Wasat, nouvelle zone urbaine d\'Illizi',
    email: 'abdouni.mohammedsalah@gmail.com',
    phone: '0655 37 10 46',
  },
  {
    id: 5,
    name: 'Tihoudaine',
    address: 'B.P 156 Illizi',
    email: 'Agancetouriset@gmail.com',
    phone: '0664 03 23 75',
  },
  {
    id: 6,
    name: 'O Mezrirene aventures',
    address: 'B.P 47 Illizi',
    email: 'zegri@tuareg-reisen.de',
    phone: '0661 50 18 07',
  },
  {
    id: 7,
    name: 'Monde Tourisme',
    address: 'in elkourse Illlizi',
    email: '290@gmail.com',
    phone: '50 09 12 85',
  },
  {
    id: 8,
    name: 'Bouamama Saleh Tourisme et Voyages',
    address: 'Hai d\'El Salam, s 05, gp de propriété n° 184 Illizi',
    email: 'bouamamasalah21@gmail.com',
    phone: '029 41 16 79',
    phone2: '029 41 16 80',
    phone3: '0668 77 99 30',
  },
  {
    id: 9,
    name: 'Ben Saha Tours',
    address: 'Hai Al-Weam Illizi',
    email: 'bensahadz33@gmail.com',
    phone: '029 40 06 69',
    phone2: '0671 61 32 08',
  },
  {
    id: 10,
    name: 'MZZ Tourisme',
    address: 'Hai El-Hadab El-Gharbi Illizi',
    email: 'contact@mzztourisme.com',
    phone: '029 41 16 16',
    phone2: '0665 96 83 57',
  },
];

const governmentOffices: GovernmentOffice[] = [
  {
    id: 1,
    name: 'Illizi Wilaya',
    emails: ['sg@illizi-wilaya.dz', 'cabinet@illizi-wilaya.dz'],
    website: 'mail.illizi-wilaya.dz',
    landline: '029.41.10.34',
    landline2: '029.41.10.37',
    fax: '029.41.10.07',
  },
  {
    id: 2,
    name: 'Directorate of Tourism and Crafts of the Wilaya of Illizi',
    emails: ['dtaillizi@gmail.com', 'dta.illizi@mta.gov.dz'],
    landline: '029.40.40.29',
    fax: '029.40.40.30',
  },
];

const touristAssociations: TouristAssociation[] = [
  {
    id: 1,
    name: 'Association touristique de Tefr-nine',
    address: 'El Ain, Bordj Omar Idris',
    phone: '0664 73 52 53',
    emails: ['hhamida33@gmail.com'],
  },
  {
    id: 2,
    name: 'Association Aras pour le Tourisme et les Echanges Touristiques',
    address: 'Hai Al-Weam',
    phone: '0671 33 68 47',
    emails: ['Ahmedmoulay42@yahoo.com'],
  },
  {
    id: 3,
    name: 'Association El-Tadi',
    address: 'Hai d\'El houanite, Bordj Omar Idris',
    phone: '0660 00 33 44',
    emails: [],
  },
  {
    id: 4,
    name: 'Association Teskraf',
    address: 'Cité de la zone urbaine, Bordj Omar Idris',
    phone: '0665 42 10 83',
    emails: ['moussamimu1982@gmail.com', 'tmsnni@gmail.com'],
  },
  {
    id: 5,
    name: 'Association touristique municipale de Diwan',
    address: 'Hai 8 mai 1945 Illizi',
    phone: '0665 96 83 57',
    emails: ['contact@mzztourism.com', 'tmsnni@gmail.com'],
  },
];

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'BOUNGA',
    address: 'Illizi',
    email: 'abderhmane-illizi@hotmail.com',
    phone: '029 41 19 87',
    phone2: '06 63 32 76 73',
  },
  {
    id: 2,
    name: 'ElHadj Bouamama Salah N\'Azdier',
    address: 'Ville illizi',
    email: 'Chebiri.mohamed@gmail.com',
    phone: '029 41 14 57',
    phone2: '06 58 11 37 83',
  },
];

interface StatItem {
  id: number;
  icon: React.ReactNode;
  number: string | number;
  label: string;
  color: string;
}

const TouristHotelServices = () => {
  const statsData: StatItem[] = [
    {
      id: 1,
      icon: <Building2 size={20} color="#8B4513" />,
      number: tourCompanies.length,
      label: 'Tour Companies',
      color: '#8B4513',
    },
    {
      id: 2,
      icon: <Landmark size={20} color="#D4AF37" />,
      number: governmentOffices.length,
      label: 'Government',
      color: '#D4AF37',
    },
    {
      id: 3,
      icon: <Users2 size={20} color="#CD853F" />,
      number: touristAssociations.length,
      label: 'Associations',
      color: '#CD853F',
    },
    {
      id: 4,
      icon: <Hotel size={20} color="#A0522D" />,
      number: hotels.length,
      label: 'Hotels',
      color: '#A0522D',
    },
  ];

  const handlePhoneCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`).catch(() => {
      Alert.alert('Error', 'Could not open phone app');
    });
  };

  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`).catch(() => {
      Alert.alert('Error', 'Could not open email app');
    });
  };

  const handleAddress = (address: string) => {
    const searchQuery = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open maps app');
    });
  };

  const handleWebsite = (website: string) => {
    const url = `https://${website}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open website');
    });
  };

  const renderStatItem = ({ item }: { item: StatItem }) => (
    <View style={styles.statCard}>
      <View style={[styles.statIconContainer, { backgroundColor: `${item.color}15` }]}>
        {item.icon}
      </View>
      <Text style={[styles.statNumber, { color: item.color }]}>{item.number}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F5F0E1', '#E0C097']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Building2 size={32} color="#8B4513" />
            <Text style={styles.headerTitle}>Tourist Services</Text>
            <Text style={styles.headerSubtitle}>Discover Illizi's Best Tour Companies</Text>
          </View>
        </View>



        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <FlatList
            data={statsData}
            renderItem={renderStatItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statsListContainer}
            ItemSeparatorComponent={() => <View style={styles.statSeparator} />}
          />
        </View>

        {/* Companies List */}
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.companiesContainer}>
            {tourCompanies.map((company) => (
              <View key={company.id} style={styles.companyCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.companyIcon}>
                    <Building2 size={24} color="#8B4513" />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>{company.name}</Text>
                    <Text style={styles.companyAddress}>{company.address}</Text>
                  </View>
                </View>

                <View style={styles.contactSection}>
                  {/* Email */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handleEmail(company.email)}
                  >
                    <Mail size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{company.email}</Text>
                  </TouchableOpacity>

                  {/* Address */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handleAddress(company.address)}
                  >
                    <MapPin size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{company.address}</Text>
                  </TouchableOpacity>

                  {/* Phone Numbers */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handlePhoneCall(company.phone)}
                  >
                    <Phone size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{company.phone}</Text>
                  </TouchableOpacity>

                  {company.phone2 && (
                    <TouchableOpacity
                      style={styles.contactItem}
                      onPress={() => handlePhoneCall(company.phone2!)}
                    >
                      <Phone size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{company.phone2}</Text>
                    </TouchableOpacity>
                  )}

                  {company.phone3 && (
                    <TouchableOpacity
                      style={styles.contactItem}
                      onPress={() => handlePhoneCall(company.phone3!)}
                    >
                      <Phone size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{company.phone3}</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.callButton]}
                    onPress={() => handlePhoneCall(company.phone)}
                  >
                    <Phone size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.emailButton]}
                    onPress={() => handleEmail(company.email)}
                  >
                    <Mail size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Email</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Government Offices Section */}
          <View style={styles.sectionHeader}>
            <Landmark size={24} color="#8B4513" />
            <Text style={styles.sectionTitle}>Government Offices</Text>
          </View>
          <View style={styles.companiesContainer}>
            {governmentOffices.map((office) => (
              <View key={office.id} style={styles.companyCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.companyIcon}>
                    <Landmark size={24} color="#8B4513" />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>{office.name}</Text>
                  </View>
                </View>

                <View style={styles.contactSection}>
                  {/* Emails */}
                  {office.emails.map((email, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.contactItem}
                      onPress={() => handleEmail(email)}
                    >
                      <Mail size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{email}</Text>
                    </TouchableOpacity>
                  ))}

                  {/* Website */}
                  {office.website && (
                    <TouchableOpacity
                      style={styles.contactItem}
                      onPress={() => handleWebsite(office.website!)}
                    >
                      <Globe size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{office.website}</Text>
                    </TouchableOpacity>
                  )}

                  {/* Landline Numbers */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handlePhoneCall(office.landline)}
                  >
                    <Phone size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{office.landline}</Text>
                  </TouchableOpacity>

                  {office.landline2 && (
                    <TouchableOpacity
                      style={styles.contactItem}
                      onPress={() => handlePhoneCall(office.landline2!)}
                    >
                      <Phone size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{office.landline2}</Text>
                    </TouchableOpacity>
                  )}

                  {/* Fax */}
                  <View style={styles.contactItem}>
                    <Phone size={16} color="#8B4513" />
                    <Text style={styles.contactText}>Fax: {office.fax}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Tourist Associations Section */}
          <View style={styles.sectionHeader}>
            <Users2 size={24} color="#8B4513" />
            <Text style={styles.sectionTitle}>Tourist Associations</Text>
          </View>
          <View style={styles.companiesContainer}>
            {touristAssociations.map((association) => (
              <View key={association.id} style={styles.companyCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.companyIcon}>
                    <Users2 size={24} color="#8B4513" />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>{association.name}</Text>
                    <Text style={styles.companyAddress}>{association.address}</Text>
                  </View>
                </View>

                <View style={styles.contactSection}>
                  {/* Address */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handleAddress(association.address)}
                  >
                    <MapPin size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{association.address}</Text>
                  </TouchableOpacity>

                  {/* Phone */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handlePhoneCall(association.phone)}
                  >
                    <Phone size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{association.phone}</Text>
                  </TouchableOpacity>

                  {/* Emails */}
                  {association.emails.map((email, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.contactItem}
                      onPress={() => handleEmail(email)}
                    >
                      <Mail size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{email}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.callButton]}
                    onPress={() => handlePhoneCall(association.phone)}
                  >
                    <Phone size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Call</Text>
                  </TouchableOpacity>
                  {association.emails.length > 0 && (
                    <TouchableOpacity
                      style={[styles.actionButton, styles.emailButton]}
                      onPress={() => handleEmail(association.emails[0])}
                    >
                      <Mail size={16} color="#FFF" />
                      <Text style={styles.actionButtonText}>Email</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>

          {/* Hotels Section */}
          <View style={styles.sectionHeader}>
            <Hotel size={24} color="#8B4513" />
            <Text style={styles.sectionTitle}>Hotels</Text>
          </View>
          <View style={styles.companiesContainer}>
            {hotels.map((hotel) => (
              <View key={hotel.id} style={styles.companyCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.companyIcon}>
                    <Hotel size={24} color="#8B4513" />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.companyName}>{hotel.name}</Text>
                    <Text style={styles.companyAddress}>{hotel.address}</Text>
                  </View>
                </View>

                <View style={styles.contactSection}>
                  {/* Email */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handleEmail(hotel.email)}
                  >
                    <Mail size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{hotel.email}</Text>
                  </TouchableOpacity>

                  {/* Address */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handleAddress(hotel.address)}
                  >
                    <MapPin size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{hotel.address}</Text>
                  </TouchableOpacity>

                  {/* Phone Numbers */}
                  <TouchableOpacity
                    style={styles.contactItem}
                    onPress={() => handlePhoneCall(hotel.phone)}
                  >
                    <Phone size={16} color="#8B4513" />
                    <Text style={styles.contactText}>{hotel.phone}</Text>
                  </TouchableOpacity>

                  {hotel.phone2 && (
                    <TouchableOpacity
                      style={styles.contactItem}
                      onPress={() => handlePhoneCall(hotel.phone2!)}
                    >
                      <Phone size={16} color="#8B4513" />
                      <Text style={styles.contactText}>{hotel.phone2}</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.callButton]}
                    onPress={() => handlePhoneCall(hotel.phone)}
                  >
                    <Phone size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.emailButton]}
                    onPress={() => handleEmail(hotel.email)}
                  >
                    <Mail size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Email</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Playfair-Bold',
    color: '#2A2A2A',
    marginTop: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
    marginTop: 5,
    textAlign: 'center',
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsListContainer: {
    paddingHorizontal: 20,
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 80,
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  statNumber: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#5B5B5B',
    textAlign: 'center',
    lineHeight: 12,
  },
  statSeparator: {
    width: 12,
  },
  scrollView: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#2A2A2A',
    marginLeft: 10,
  },
  companiesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  companyCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  companyIcon: {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    padding: 10,
    borderRadius: 15,
    marginRight: 15,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#2A2A2A',
    marginBottom: 4,
  },
  companyAddress: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
  },
  contactSection: {
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(139, 69, 19, 0.05)',
    borderRadius: 10,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8B4513',
    marginLeft: 10,
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
    marginHorizontal: 5,
  },
  callButton: {
    backgroundColor: '#8B4513',
  },
  emailButton: {
    backgroundColor: '#D4AF37',
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#FFF',
    marginLeft: 5,
  },
});

export default TouristHotelServices;