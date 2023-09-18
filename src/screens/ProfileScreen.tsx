import { TouchableButton } from "@/components/common";
import GlobalStyles from "@/utils/styles/GlobalStyles";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, View } from "react-native";

const ProfileScreen = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
      )}
      <TouchableButton onPress={pickImage}>이미지 업로드</TouchableButton>
    </View>
  );
};

export default ProfileScreen;
