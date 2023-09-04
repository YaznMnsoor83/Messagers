import { User } from "@prisma/client";
import getCurrentUser from "../actions/getCurrentUser";
interface AvatarProps {
  user?: User;
};
const EmptyState:React.FC<AvatarProps>  = ({user}) => {
  
    return ( 
      <div 
        className="
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          h-full 
          flex 
          justify-center 
          items-center 
          bg-gray-100
        "
      >
        <div className="text-center items-center flex flex-col">
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
 Hello {user?.name} start you conversation Messagers !
          </h3>
        </div>
      </div>
    );
  }
   
  export default EmptyState;