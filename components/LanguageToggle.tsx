import { Languages } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Language = 'en' | 'ar' | 'fr';

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void;
  currentLanguage: Language;
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', native: 'English' },
    { code: 'ar' as Language, name: 'Arabic', native: 'العربية' },
    { code: 'fr' as Language, name: 'French', native: 'Français' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.8}
      >
        <Languages size={20} color="#D4A574" />
        <Text style={styles.triggerText}>{currentLang?.native}</Text>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.dropdown}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.option,
                currentLanguage === lang.code && styles.activeOption
              ]}
              onPress={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.optionText,
                currentLanguage === lang.code && styles.activeOptionText
              ]}>
                {lang.native}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(212, 165, 116, 0.1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D4A574',
  },
  triggerText: {
    color: '#D4A574',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginLeft: 8,
  },
  dropdown: {
    zIndex: 50,
    position: 'absolute',
    top: 45,
    right: 0,
    backgroundColor: '#2C1810',
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 120,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  activeOption: {
    backgroundColor: 'rgba(212, 165, 116, 0.2)',
  },
  optionText: {
    color: '#D4A574',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  activeOptionText: {
    fontFamily: 'Inter-SemiBold',
  },
});