import SoilData from "@/components/SoilData";
import { connectMongoDB } from "@/lib/mongodb";
import Soildata from "@/models/soildata";


const page = async () => {
  
  await connectMongoDB();
  const allSoilData = await Soildata.find();
  return (

    <SoilData item={allSoilData}/>
  );
};

export default page;
