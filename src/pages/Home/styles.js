import { makeStyles } from "@mui/styles";


const useStyle = makeStyles((theme) => ({
  Titulo: {
 fontWeight:'bold !important ',
 paddingBottom:25,
 fontSize:'50px !important',
 lineHeight:'normal',
  },
  Tenis: {
    width: '100%',
    animation: '$animacaoSubirDescer 2s infinite alternate',
  },
  '@keyframes animacaoSubirDescer': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}));

export default useStyle;
