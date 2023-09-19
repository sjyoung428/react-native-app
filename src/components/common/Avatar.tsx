import React from "react";
import { Pressable } from "react-native";
import { Avatar as AvatarComponent } from "react-native-paper";

interface AvatarProps {
  image: string | null;
  size?: number;
  onPress?: () => void;
}

const Avatar = ({ image, size, onPress }: AvatarProps) => {
  return !image ? (
    <Pressable onPress={onPress}>
      <AvatarComponent.Icon size={size} icon="account" />
    </Pressable>
  ) : (
    <Pressable onPress={onPress}>
      <AvatarComponent.Image source={{ uri: image }} size={size} />
    </Pressable>
  );
};

export default Avatar;
