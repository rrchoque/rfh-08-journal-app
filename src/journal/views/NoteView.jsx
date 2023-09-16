import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ mb: 1 }}
        className='animate__animate animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{ dateString }</Typography>
        </Grid>
        <Grid item>
            <Button 
                color="primary" 
                sx={{ padding: 2 }}
                onClick={ onSaveNote }
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name="body"
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        <ImageGallery />
    </Grid>
  )
}
