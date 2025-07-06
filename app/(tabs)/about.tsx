import { LinearGradient } from 'expo-linear-gradient';
import {
    Award,
    Calendar,
    Camera,
    Compass,
    Globe,
    Heart,
    Mail,
    MapPin,
    Mountain,
    Phone,
    Star,
    Users,
} from 'lucide-react-native';
import React from 'react';
import {
    Dimensions,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

const About = () => {
  const handleContact = (type: string, value: string) => {
    switch (type) {
      case 'phone':
        Linking.openURL(`tel:${value}`);
        break;
      case 'email':
        Linking.openURL(`mailto:${value}`);
        break;
      case 'website':
        Linking.openURL(`https://${value}`);
        break;
      case 'location':
        const searchQuery = encodeURIComponent(value);
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`);
        break;
    }
  };

  const features = [
    {
      id: 1,
      icon: <Compass size={24} color="#8B4513" />,
      title: 'Explore',
      description: 'Discover hidden gems and breathtaking landscapes',
    },
    {
      id: 2,
      icon: <Mountain size={24} color="#8B4513" />,
      title: 'Adventure',
      description: 'Experience thrilling desert adventures and cultural tours',
    },
    {
      id: 3,
      icon: <Camera size={24} color="#8B4513" />,
      title: 'Capture',
      description: 'Photograph stunning desert vistas and ancient sites',
    },
    {
      id: 4,
      icon: <Users size={24} color="#8B4513" />,
      title: 'Connect',
      description: 'Meet local communities and learn their traditions',
    },
  ];

  const stats = [
    { id: 1, number: '10+', label: 'Tour Companies', icon: <Star size={20} color="#D4AF37" /> },
    { id: 2, number: '5', label: 'Associations', icon: <Users size={20} color="#D4AF37" /> },
    { id: 3, number: '2', label: 'Hotels', icon: <Award size={20} color="#D4AF37" /> },
    { id: 4, number: '24/7', label: 'Support', icon: <Calendar size={20} color="#D4AF37" /> },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F5F0E1', '#E0C097', '#D4AF37']}
        style={styles.gradient}
      >
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoBackground}>
                <Compass size={40} color="#8B4513" />
              </View>
            </View>
            <Text style={styles.title}>Illizi Guide</Text>
            <Text style={styles.subtitle}>Your Gateway to the Sahara's Hidden Treasures</Text>
          </View>

          {/* Mission Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Mission</Text>
            <View style={styles.missionCard}>
              <Text style={styles.missionText}>
                To provide travelers with comprehensive information about Illizi's rich cultural heritage, 
                stunning natural landscapes, and authentic desert experiences. We connect visitors with 
                local tour operators, accommodations, and cultural experiences that showcase the true 
                beauty of the Sahara.
              </Text>
            </View>
          </View>

          {/* Features Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What We Offer</Text>
            <View style={styles.featuresContainer}>
              {features.map((feature) => (
                <View key={feature.id} style={styles.featureCard}>
                  <View style={styles.featureIcon}>
                    {feature.icon}
                  </View>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Illizi Tourism</Text>
            <View style={styles.statsContainer}>
              {stats.map((stat) => (
                <View key={stat.id} style={styles.statCard}>
                  <View style={styles.statIcon}>
                    {stat.icon}
                  </View>
                  <Text style={styles.statNumber}>{stat.number}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* About Illizi Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Illizi</Text>
            <View style={styles.aboutCard}>
              <Text style={styles.aboutText}>
                Illizi is a captivating province in southeastern Algeria, known for its dramatic desert 
                landscapes, ancient rock art, and rich cultural heritage. The region is home to the 
                stunning Tassili n'Ajjer National Park, a UNESCO World Heritage site featuring 
                prehistoric cave paintings and breathtaking sandstone formations.
              </Text>
              <Text style={styles.aboutText}>
                The province offers visitors a unique blend of adventure tourism, cultural experiences, 
                and natural wonders. From exploring ancient caravan routes to experiencing traditional 
                Tuareg hospitality, Illizi provides an authentic glimpse into the heart of the Sahara.
              </Text>
            </View>
          </View>

          {/* Contact Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Get in Touch</Text>
            <View style={styles.contactContainer}>
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleContact('location', 'Illizi, Algeria')}
              >
                <MapPin size={20} color="#8B4513" />
                <Text style={styles.contactText}>Illizi, Algeria</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleContact('email', 'info@illiziguide.com')}
              >
                <Mail size={20} color="#8B4513" />
                <Text style={styles.contactText}>info@illiziguide.com</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleContact('phone', '+213 123 456 789')}
              >
                <Phone size={20} color="#8B4513" />
                <Text style={styles.contactText}>+213 123 456 789</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => handleContact('website', 'www.illiziguide.com')}
              >
                <Globe size={20} color="#8B4513" />
                <Text style={styles.contactText}>www.illiziguide.com</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Made with <Heart size={14} color="#8B4513" /> for Illizi
            </Text>
            <Text style={styles.footerSubtext}>
              Discover the magic of the Sahara
            </Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#8B4513',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Playfair-Bold',
    color: '#2A2A2A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
    textAlign: 'center',
    maxWidth: width * 0.8,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#2A2A2A',
    marginBottom: 15,
    textAlign: 'center',
  },
  missionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  missionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#2A2A2A',
    lineHeight: 24,
    textAlign: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    width: (width - 50) / 2,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    backgroundColor: 'rgba(139, 69, 19, 0.1)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#2A2A2A',
    marginBottom: 6,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
    textAlign: 'center',
    lineHeight: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    width: (width - 50) / 2,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statIcon: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#8B4513',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
    textAlign: 'center',
  },
  aboutCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aboutText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#2A2A2A',
    lineHeight: 24,
    marginBottom: 12,
  },
  contactContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 69, 19, 0.1)',
  },
  contactText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#8B4513',
    marginLeft: 12,
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#2A2A2A',
    marginBottom: 8,
    textAlign: 'center',
  },
  footerSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#5B5B5B',
    textAlign: 'center',
  },
});

export default About;