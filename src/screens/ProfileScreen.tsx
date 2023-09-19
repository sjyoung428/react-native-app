import Avatar from "@/components/common/Avatar";
import useUploadAvatar from "@/hooks/queries/user/useUploadAvatar";
import { useAvatarStore } from "@/store/useAvatarStore";
import GlobalStyles from "@/utils/styles/GlobalStyles";

import * as ImagePicker from "expo-image-picker";
import { View } from "react-native";

const ProfileScreen = () => {
  const { mutate } = useUploadAvatar({
    onSuccess: () => {
      console.log("성공");
    },
  });
  // const [image, setImage] = useState<string | null>(null);
  const { image, setImage } = useAvatarStore();

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
      // mutate(formatData);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Avatar image={image} size={200} onPress={pickImage} />
    </View>
  );
};

export default ProfileScreen;
