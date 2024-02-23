import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import MoodIcon from '@mui/icons-material/Mood';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import LinkIcon from '@mui/icons-material/Link';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { Button } from '@mui/material';

function ReplyIcons() {
    return (
        <div>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><AttachFileIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><FormatBoldIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><FormatItalicIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><FormatUnderlinedIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><MoodIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><LinkIcon /></Button>
            <Button sx={{ p: 0.5, minWidth: 'auto', color: 'black' }} size="small"><DeleteIcon /></Button>
        </div>
    );
}

export default ReplyIcons;
