import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { pastExperiences } from "../utils/constant";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

const PastExperience = () => {
  return (
    <div className="container my-10">
      <h1 className="text-3xl">Past Experiences</h1>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
        {pastExperiences.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index} className="relative">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="room"
              />
              <CardContent>
                <p className="text-normal font-semibold text-nowrap">{item.title}</p>
                <p className="font-light">{item.host}</p>
                <p className="text-normal font-semibold">{item.stock}</p>
              </CardContent>
            </CardActionArea>
            <div className="absolute top-2 right-2 h-8 w-8 bg-airbnb-hover flex items-center justify-center rounded-full">
              <PublishOutlinedIcon />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastExperience;
