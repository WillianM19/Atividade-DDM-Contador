import { TouchableOpacity, Text, View } from 'react-native';

interface ButtonProps {
  content: string;
  action: () => void;
}

export default function Button({ content, action }: ButtonProps) {
  return (
    <TouchableOpacity onPress={action} style={styles.buttonStyle}>
      <Text style={styles.content}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    backgroundColor: '#2f1c58',
    padding: 10,
    width: 200,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  content: {
    color:'white'
  }
}


