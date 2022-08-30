import { Image } from 'react-native';

const CustomImage = props => {
    return (
        <Image source={props.source} style={props.style} />
    );
}


export default CustomImage;