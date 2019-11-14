function useMyDataFetch(props) {
  const data = "hello data " + props.data;
  const error = "hello error";
  const isLoading = "hello loading";
  return { data, error, isLoading };
}
export default useMyDataFetch;
