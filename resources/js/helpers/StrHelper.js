class StrHelper {
    static toUpperFirstChar(word){
        return (word+'').charAt(0).toUpperCase()+word.substr(1);
    };
}
export default StrHelper;