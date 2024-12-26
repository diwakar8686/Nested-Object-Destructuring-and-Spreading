function flattenProfile(userProfile) {
    const {
      name,
      address: { city, country, coordinates },
      contact: { phone, email },
      preferences: { notifications }
    } = userProfile;
  
    return {
      name,
      city,
      country,
      phone,
      email,
      coordinates,
      notifications
    };
  }
  const userProfile = {
    name: 'Diwakar kumar',
    age: 25,
    address: {
      city: 'Aurangabad',
      country: 'India',
      postalCode: '824101',
      coordinates: {
        lat: 40.7128,
        long: -74.0060
      }
    },
    contact: {
      phone: '8340774068',
      email: 'diw2akar@gmail.com'
    },
    preferences: {
      newsletter: true,
      notifications: {
        email: true,
        sms: false
      }
    }
  };
  
  console.log(flattenProfile(userProfile));
  