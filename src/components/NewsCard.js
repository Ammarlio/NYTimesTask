import { Text, Card, Button, Icon } from '@rneui/themed';
import { colors } from '../utils/colors';
import { Image } from "@rneui/themed";
import { ActivityIndicator } from 'react-native';

const NewsCard = (props) => {
    return (
        <Card containerStyle={{ borderRadius: 8, borderColor: colors.PRIMARY }}>
            <Card.Title>{props.title || ""}</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
                {props.subsection || ""} - {props.section}
            </Text>
            <Image
                containerStyle={{
                    aspectRatio: 1,
                    width: '100%',
                }}
                source={{
                    uri:
                        props.media?.[0]?.["media-metadata"]?.[2]?.url || "",
                }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={{ marginVertical: 10 }}>
                {props.abstract || ""}
            </Text>
            {!props.detailsScreen && <Button
                onPress={props.onPress}
                icon={
                    <Icon
                        name="preview"
                        color={colors.WHITE}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                buttonStyle={{
                    backgroundColor: colors.PRIMARY,
                    borderRadius: 8,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    opacity: 0.7
                }}
                titleStyle={{
                    fontSize: 14
                }}
                title="See Details"
            />}
        </Card>
    )
}

export default NewsCard;