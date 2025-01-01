import Hello from '@/app/component/hello';

export default function Home() {
  console.log('我是服务端组件1111');

  return (
    <>
      <Hello></Hello>
      <div>Home11</div>
    </>
  );
}
