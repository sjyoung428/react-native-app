import { TouchableButton } from "@/components/common";
import useUploadAvatar from "@/hooks/queries/user/useUploadAvatar";
import GlobalStyles from "@/utils/styles/GlobalStyles";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, View } from "react-native";

const ProfileScreen = () => {
  const { mutate } = useUploadAvatar({
    onSuccess: () => {
      console.log("성공");
    },
  });
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

      const formatData = new FormData();
      formatData.append("avatar", result.assets[0].uri);
      mutate(formatData);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      {!image ? (
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: "gray",
          }}
        />
      ) : (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
      )}
      <TouchableButton style={{ marginTop: 20 }} onPress={pickImage}>
        이미지 업로드
      </TouchableButton>
    </View>
  );
};

export default ProfileScreen;
