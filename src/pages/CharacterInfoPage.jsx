import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteIcon from "@mui/icons-material/Favorite"


import { Link } from 'react-router-dom';
import { switchStatusColor } from '../utils';
import { ChipList, Spinner } from '../components/ui';
import { useCharacterInfo } from '../hooks';

export const CharacterInfoPage = () => {
    const {
        character,
        episodeLimit,
        isFavorite,
        onAddFavorite,
        onShowEpisodes,
        navigate } = useCharacterInfo()

    if (!character.id) {
        return <Spinner />;
    }

    const episodeList = character.episode.slice(0, episodeLimit).map((el) => {
        const id = el.split('/').pop();
        return {
            label: `#${id}`,
            value: (
                <Link to={`/episode/${id}`}>
                    <Box display='flex' justifyContent='space-between' alignContent='center' gap={2}>
                        <Typography variant='body2' sx={{ color: 'white' }}>
                            Go to episode
                        </Typography>
                        <ArrowRightAltIcon sx={{ color: 'white' }} />
                    </Box>
                </Link>
            ),
        };
    });


    return (
        <Box sx={{ width: '100%', maxWidth: 1200, m: '0 auto' }}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <IconButton onClick={() => navigate(-1)}>
                    <KeyboardBackspaceIcon sx={{ color: 'white', fontSize: 40 }} />
                </IconButton>
                <IconButton onClick={onAddFavorite}>
                    <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'white', fontSize: 30 }} />
                </IconButton>
            </Box>
            <Box display='flex' alignItems='center' flexDirection='column' gap={3}>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image src={character.image}
                        width={200}
                        height={200}
                        alt={character.name}
                        duration={1000}
                        style={{
                            borderRadius: '100%',
                            border: `5px solid ${switchStatusColor(character.status)}`,
                        }} />
                    <span style={{
                        color: 'white',
                        display: 'inline-block',
                        backgroundColor: switchStatusColor(character.status),
                        padding: '2px 10px',
                        borderRadius: '10px',
                        marginTop: '-15px',
                        zIndex: 1,
                        textTransform: 'uppercase',
                    }}>{character.status}</span>
                </Box>
                <Typography variant='h4' fontWeight={700} textAlign='center'>{character.name}</Typography>
                <ChipList
                    title='Properties'
                    stylesContainer={{
                        mt: 5
                    }}
                    dataChips={[
                        {
                            label: 'Gender',
                            value: character.gender
                        },
                        {
                            label: 'Species',
                            value: character.species
                        },
                        {
                            label: 'Status',
                            value: character.status
                        },
                    ]}
                />

                <ChipList
                    title='Whereabouts'
                    stylesContainer={{
                        mt: 3
                    }}
                    dataChips={[
                        {
                            label: 'Origin',
                            value: character.origin.name
                        },
                        {
                            label: 'Location',
                            value: character.location.name
                        },
                    ]}
                />
                <ChipList
                    title='Episodes'
                    stylesContainer={{
                        mt: 3
                    }}
                    dataChips={episodeList}
                />
                <Box display='flex' gap={2}>
                    {
                        character.episode.length > 5
                        && episodeLimit <= character.episode.length
                        && <Button onClick={() => onShowEpisodes(5)} >Show more episodes</Button>
                    }
                    {
                        character.episode.length > 5
                        && episodeLimit > 6
                        && <Button onClick={() => onShowEpisodes(-5)} >Show less episodes</Button>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default CharacterInfoPage