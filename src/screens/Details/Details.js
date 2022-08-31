import { View } from "react-native";
import NewsCard from "../../components/NewsCard";

const Details = (props) => {
    return (
        <View>
            <NewsCard {...props} {...props?.route?.params} detailsScreen={true} />
        </View>
    )
}

export default Details;