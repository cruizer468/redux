import { INCREMENT, DECREMENT } from '../actons';

function Number(state = 2, action) {
    switch(action.type){
        case INCREMENT:
         return state + 1;
        // end
         case DECREMENT:
         return state - 1 ;
        default:
         return state;
    }
}

export default Number;