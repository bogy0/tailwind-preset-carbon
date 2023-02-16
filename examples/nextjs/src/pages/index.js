export default function IndexPage() {
  return (
    <div className="dark h-screen flex flex-col">
      <div className="bg-white-backgroundBrand px-7 text-g100-textPrimary text-xs py-4">Banner</div>
      <header className="bg-g100-background text-g100-textPrimary">
        <div className="text-4xl p-7">Hello</div>
      </header>
      <main className="flex-1 p-7 bg-white-background dark:bg-g90-background text-white-textPrimary dark:text-g100-textPrimary">
        <h1 className="heading-07 mb-4">This if for layout heading.</h1>
        <p className="">Lorem ipsum dolor set</p>
        <p className="font-mono mb-10">This is some code example</p>
        <p className="">Custom Carbon Typohraphy</p>
      </main>
      <footer className="p-7 text-center">
        footer
      </footer>
    </div>
  );
}
