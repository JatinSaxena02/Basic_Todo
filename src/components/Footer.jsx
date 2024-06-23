export default function Footer({totalTodos,completedTodos}){
    return <div className="flex bottom-0 fixed text-center p-2 bg-slate-500 w-full justify-evenly text-2xl ">
        <h1>Completed : {completedTodos}</h1>
        <h1>Total : {totalTodos}</h1>
    </div>
}