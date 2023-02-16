export default function IndexPage() {
  return (
    <div className="dark h-screen flex flex-col">
      <div className="bg-white-backgroundBrand px-7 text-g100-textPrimary text-xs py-4">Banner</div>
      <header className="bg-g100-background text-g100-textPrimary">
        <div className="text-4xl p-7">IBM Carbon Tailwind</div>
      </header>
      <main className="flex-1 p-7 bg-white-background dark:bg-g90-background text-white-textPrimary dark:text-g100-textPrimary">
        <h1 className="heading-07 mb-4">Hello Carbon Tailwind!</h1>
        <p className="body-02 mb-2 max-w-prose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet quis nibh nec elementum. Etiam pellentesque massa in tellus rhoncus, a viverra orci suscipit. In vulputate finibus tortor varius egestas. Donec suscipit nibh sit amet orci commodo, in faucibus ligula consectetur. Vestibulum ultrices malesuada augue, eu posuere nibh facilisis non. Morbi mi justo, mattis vel efficitur ut, interdum et orci. Integer nec ante ex. Vestibulum bibendum ullamcorper ornare. Maecenas pellentesque viverra venenatis. Ut euismod libero vel suscipit semper. Quisque at tincidunt leo. Donec tempus nisl sem, at rhoncus neque scelerisque sit amet. Aenean ut enim purus. Vivamus quis turpis nisi. Nunc sed diam ut justo tempus condimentum nec euismod urna. Nam tristique porta urna at sodales. Cras sit amet sodales felis. Aenean vel purus a urna feugiat ullamcorper. Curabitur pellentesque rhoncus ex, at facilisis risus efficitur ac. Donec iaculis ligula at congue pharetra. Etiam mollis nec lectus vitae aliquam. Pellentesque porta dolor felis, eget maximus felis pharetra eget. In hac habitasse platea dictumst. Praesent ligula tellus, ornare et vehicula ut, facilisis quis nunc. Vestibulum elementum sem tincidunt, elementum massa at, egestas lorem. Integer at lorem ut ante condimentum blandit. Praesent volutpat libero lacus, in iaculis quam vulputate a. Ut auctor orci mollis nunc aliquam auctor. Aenean in tempor erat. Aenean eleifend ex nec neque laoreet, vitae elementum nisi pretium. Nam mollis dolor in dolor facilisis vulputate. Vestibulum tincidunt risus vitae tincidunt mattis. Fusce tristique diam mauris, vitae hendrerit odio aliquam hendrerit. Donec consequat pretium risus, vitae dapibus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla cursus massa, eu laoreet nisl placerat sed. Duis pretium dui libero, vel fermentum est ullamcorper a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p className="font-mono mb-10">This is some code example</p>
      </main>
      <footer className="p-7 text-center">
        footer
      </footer>
    </div>
  );
}
