import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export const ChipList = ({ stylesContainer = {}, dataChips = [], title = '' }) => {
    return (
        <Box sx={stylesContainer}>
            <Box sx={{ mb: 2 }} textTransform='uppercase' display='flex' alignItems={
                'center'
            } justifyContent={'center'} gap={2}>
                <Divider sx={{ width: '20%' }} />
                <Typography>{title}</Typography>
                <Divider sx={{ width: '20%' }} />
            </Box>

            <Box display={'flex'} flexDirection='column' gap={1} className='fadeIn'>
                {dataChips.map(({ label, value }) => (
                    <Box key={label} display={'flex'} justifyContent='space-between' gap={2}>
                        <Chip variant="outlined" label={label} sx={{ width: 100 }} />
                        <Chip label={value} sx={{ width: 200 }} />
                    </Box>
                ))}

            </Box>
        </Box>
    )
}
