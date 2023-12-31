import React from "react";
import { Game } from "../hooks/userGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Emoji } from "./Emoji";


interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (
        <Card borderRadius={10} fontSize={'21px'} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom={3} justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading>
                
                    {game.name} <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard