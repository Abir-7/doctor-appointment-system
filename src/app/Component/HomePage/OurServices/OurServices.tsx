import Link from "next/link";

import { FaEye, FaStethoscope } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { TbDental,TbWaveSawTool } from "react-icons/tb";
import ServiceCard from "./ServiceCard";
import { GiBrokenBone,GiBrain } from "react-icons/gi"
import { GrRestroomWomen } from "react-icons/gr"
const OurServices = () => {
  return (
    <div className="grid gap-10 w-full md:grid-cols-3 lg:grid-cols-4">

<ServiceCard icon={<FaEye/>} title={'Eye Care'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<RiPsychotherapyFill/>} title={'Psychotherapy'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<FaStethoscope/>} title={'Primary Care'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<TbDental/>} title={'Dental Care'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<GiBrokenBone/>} title={'Orthopedic'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<TbWaveSawTool/>} title={'Cardiology'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<GrRestroomWomen/>} title={'Gynecology'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>
<ServiceCard icon={<GiBrain/>} title={'Neurology'} des={'There is now an abundance of readable dummy texts required purely to fill a space.'}></ServiceCard>

    </div>
  );
};

export default OurServices;
