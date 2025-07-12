import { useDispatch, useSelector } from "react-redux";
import { fetchQuote, selectQuote } from "./quotesSlice";
import { useEffect } from "react";

export const Quote = () => {
  const dispatch = useDispatch();
  const { quote, status, error } = useSelector(selectQuote);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuote());
    }
  }, [status, dispatch]);

  return (
    <article className="text-center">
      <h3 className="text-xl">{quote[0]?.content}</h3>
      <p>{quote[0]?.author}</p>
    </article>
  );
};
