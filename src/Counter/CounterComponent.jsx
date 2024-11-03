import {TitleTextComponent} from "../Ui/TitleTextComponent";
import {BtnComponent} from "./Components/BtnComponent";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../Store/store';

export function CounterComponent() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
            <TitleTextComponent title="Counter" className={"text-2xl font-bold font-serif text-gray-700 mb-4"}/>
            <div className="flex items-center justify-center gap-4 mb-4 font-semibold">
                <BtnComponent text="+" onClick={() => dispatch(increment())}
                              className={"text-xl px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"} />
                <TitleTextComponent text={count} className={"text-4xl font-semibold text-gray-800"}/>
                <BtnComponent text="−" onClick={() => dispatch(decrement())}
                              className={"text-xl px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"}/>
            </div>
            <BtnComponent
                text="Reset"
                onClick={() => dispatch(reset())}
                className={"px-4 py-2 bg-red-900 text-white font-semibold font-serif rounded hover:bg-red-800 transition duration-200"}/>
            </div>
        </div>

    )
}