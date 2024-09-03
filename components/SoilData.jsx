"use client"
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const SoilData = ({item}) => {
  return (
    <div className=" grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {item.map((data, index) => (
        <Card key={index} className="shadow-2xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300 my-10 w-[320px] md:w-[350px] lg:w-[400px] h-[350px]">
          <CardHeader>
            <Heading className="font-mono" size="md">
              {data.soilname}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="font-sans">{data.description}</Text>
          </CardBody>
          <CardFooter>
            <Text className="font-semibold text-sm text-gray-400 italic mx-2">
              Distributor: {data.distributorName}
            </Text>
  
            <Text className="font-semibold text-sm text-gray-400 italic mx-2">
              Contact: {data.distributorContact}
            </Text>
          </CardFooter>
          
        </Card>
      ))}
    </div>
  )
}

export default SoilData
