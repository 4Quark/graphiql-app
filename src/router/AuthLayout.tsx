import { useOutlet } from 'react-router-dom';

export const AuthLayout = () => {
  const outlet = useOutlet();
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(getIfAuthThunk()).finally(() => {
  //     dispatch(getCategoriesThunk()).finally(() => {
  //       dispatch(getCartThunk());
  //     });
  //   });
  // }, [dispatch]);

  return <>{outlet}</>;
};
