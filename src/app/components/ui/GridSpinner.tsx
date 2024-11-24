import dynamic from "next/dynamic";

//다이나믹 임포트
//next js는 정적으로 만들수있는건 다 만들어 서버에 가지고있기때문에
//하이드레이션이 일어 난 뒤 클라이언트쪽 스타일과 서버에서 갖고있는 스타일이 달라서 에러띄움.
const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);
const PropagateLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.PropagateLoader),
  {
    ssr: false,
  }
);
type Props = {
  color?: string;
};
type Props2 = {
  color?: string;
  size?: number;
};
export function GridSpinner({ color = "pink" }: Props) {
  return <GridLoader color={color} />;
}

export function GridSpinner2({ color = "pink", size = 8 }: Props2) {
  return <PropagateLoader color={color} size={size} />;
}
