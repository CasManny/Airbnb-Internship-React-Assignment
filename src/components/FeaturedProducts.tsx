import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { featuredProducts } from "../utils/constant";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

const FeaturedProducts = () => {
  return (
    <div className="container mt-10">
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1">
        {featuredProducts.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index} className="relative rounded-lg">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="room"
              />
              <CardContent>
                <p className="text-lg">{item.title}</p>
                <p className="font-thin">{item.host}</p>
                <p className="text-normal">{item.date}</p>
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

export default FeaturedProducts;
