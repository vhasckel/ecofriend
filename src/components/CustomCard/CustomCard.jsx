import { Box, Card, CardContent } from "@mui/material";
import Paragraph from "../Paragraph/Paragraph";
import Subtitle from "../Subtitle/Subtitle";

const CustomCard = ({ title, paragraph }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Subtitle text={title} />
          <Paragraph text={paragraph} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;
