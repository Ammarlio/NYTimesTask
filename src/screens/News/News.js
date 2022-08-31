import { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsCard from "../../components/NewsCard";
import { colors } from "../../utils/colors";
import { SearchBar } from "@rneui/base";
import CONSTANTS from "../../constants/constants";


const newsDate = [
    {
        date: "Today",
        param: "1",
    },
    {
        date: "Last 7 days",
        param: "7",
    },
    {
        date: "Last 30 days",
        param: "30",
    }
]

export default function News(props) {

    const [dateFilter, setDateFilter] = useState("1");
    const [news, setNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        switch (dateFilter) {
            case "1":
                setNews(props.news_1)
                break;
            case "7":
                setNews(props.news_7)
                break;
            case "30":
                setNews(props.news_30)
                break;

        }
        setRefreshing(false)
    }, [props.news_1, props.news_7, props.news_30])

    useEffect(() => {
        props.fetchMostPopular("1")
    }, [])

    const fetchNewsPerDate = useCallback(({ param }) => {
        setDateFilter(param)
        setSearch("")
        props.fetchMostPopular(param)
    })

    const renderItem = useCallback(({ item, index }) => {
        return (
            <NewsCard
                key={index}
                {...item}
                onPress={() => props.navigation.navigate(CONSTANTS.SCREENS.DETAILS, item)}
            />
        )

    })

    const newsSwitch = () => {
        switch (dateFilter) {
            case "1":
                setNews(props.news_1)
                break;
            case "7":
                setNews(props.news_7)
                break;
            case "30":
                setNews(props.news_30)
                break;

        }
    }

    const filterSeach = useCallback((text) => {
        if (text) {
            const filteredNews = news?.filter((item) => {
                const itemNews = item.title ? item?.title?.toLowerCase() : ''.toLowerCase();
                const textSearch = text?.toLowerCase();
                return itemNews?.indexOf(textSearch) > -1
            });
            setFilteredNews(filteredNews);
            setSearch(text)
        } else {
            newsSwitch()
            setSearch(text)
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listTab}>
                {
                    newsDate.map(({ date, param }) => {
                        const dateStatus = dateFilter === param;
                        return (
                            <TouchableOpacity
                                key={date} style={[styles.tabButton, dateStatus && styles.tabButtonActive]}
                                onPress={() => fetchNewsPerDate({ date, param })}
                            >
                                <Text style={[styles.buttonText, dateStatus && styles.buttonTextActive]}>
                                    {date}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <SearchBar
                platform="ios"
                containerStyle={styles.textInputStyle}
                inputContainerStyle={[{ backgroundColor: colors.WHITE }]}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                onChangeText={(text) => filterSeach(text)}
                onClearText={() => filterSeach("")}
                placeholder="Search..."
                placeholderTextColor={colors.GRAY}
                cancelButtonTitle="Cancel"
                value={search}
            />
            <FlatList
                data={search.length ? filteredNews : news}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => {
                            setRefreshing(true)
                            props.fetchMostPopular(dateFilter)
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    listTab: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabButton: {
        alignSelf: 'flex-start',
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        padding: 10,
    },
    tabButtonActive: {
        backgroundColor: colors.PRIMARY,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.BLACK
    },
    buttonTextActive: {
        color: colors.WHITE
    },
    textInputStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 16,
        marginVertical: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        height: 50,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 12,
    },
})