import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";

import Header from "./Header";
import ColorBadge from "./ColorBadge";
import { colors } from "../style/index";


/**
 * Renders an <Item /> Component
 * @param props
 * @param props.children - Title, Subtitle, Avatar
 * @param props.onPress - When the Item is pressed
 */
export default function Item({ children, onPress }) {
    const title = React.Children.map(children, (child) =>
        child.type.displayName === "Item.Title" ? child : null
    );

    const avatar = React.Children.map(children, (child) =>
        child.type.displayName === "Item.Avatar" ? child : null
    );

    const subtitle = React.Children.map(children, (child) =>
        child.type.displayName === "Item.Subtitle" ? child : null
    );

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                    {avatar}
                    <ListItem.Content>
                        {Boolean(title.length) && (
                            <ListItem.Title style={{margin: 2}}>{title}</ListItem.Title>
                        )}
                        {Boolean(subtitle.length) && (
                            <ListItem.Subtitle style={{margin: 2}}>{subtitle}</ListItem.Subtitle>
                        )}
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        </>
    );
}


/**
 * Renders an <Item.Title /> Component
 * @param props
 * @param props.children - Text for Title
 * @param props.badge - Whether a <ColorBadge /> is rendered
 * @param props.badgeOptions - Color and Padding option for <ColorBadge />
 */
function ItemTitle({ children, badge, badgeOptions }) {
    return (
        <>
            {badge ? (
                <Header type="h4" color={colors.white}>
                    <ColorBadge
                        color={badgeOptions?.color}
                        padding={badgeOptions?.padding}
                    />
                    {children}
                </Header>
            ) : (
                <Header type="h4" color={colors.white}>
                    {children}
                </Header>
            )}
        </>
    );
}


/**
 * Renders an <Item.Subtitle /> Component
 * @param props
 * @param props.children - Text for subtitle
 */
function ItemSubtitle({ children }) {
    return (
        <>
            <Header type="h5" fontWeight="500" color={colors.primary100}>
                {children}
            </Header>
        </>
    );
}


/**
 * Renders an <Item.Avatar /> Component
 * @param props
 * @param props.iconName - Icon name for avatar
 */
function ItemAvatar({ iconName }) {
    return (
        <>
            <Avatar
                rounded
                size="medium"
                containerStyle={{ backgroundColor: colors.accentTransparent }}
                icon={{
                    name: iconName,
                    color: colors.accent,
                    type: 'material-community'
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary300,
    },
});

ItemTitle.displayName = "Item.Title";
ItemAvatar.displayName = "Item.Avatar";
ItemSubtitle.displayName = "Item.Subtitle";

Item.Title = ItemTitle;
Item.Avatar = ItemAvatar;
Item.Subtitle = ItemSubtitle;
