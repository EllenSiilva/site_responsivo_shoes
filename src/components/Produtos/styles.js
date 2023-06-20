import { makeStyles } from "@mui/styles";


const useStyle = makeStyles((theme) => ({
  AppBar: {
 boxShadow:'none !important',
  },
  Tenis: {
    width: '100%',
    animation: '$animacaoSubirDescer 2s infinite alternate',
  },
}));

export default useStyle;
