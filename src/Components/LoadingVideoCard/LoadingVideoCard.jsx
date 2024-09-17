import { Box, Card, CardContent } from "@mui/material";

const LoadingVideoCard = () => {
  return (
    <>
      <Box>
        <Card
          sx={{
            width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
            boxShadow: "none",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
              height: 180,
            }}
          ></Box>
          <CardContent
            className="flex flex-col gap-2"
            sx={{ backgroundColor: "#1e1e1e", height: "106px" }}
          >
            <div className="flex flex-col gap-1">
              <div className="bg-gray-300 h-[18px] w-60 rounded-md"></div>
              <div className="bg-gray-300 h-[18px] w-60 rounded-md"></div>
            </div>
            <div className="bg-gray-300 h-[14px] w-20 rounded-md"></div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoadingVideoCard;
