import { ContextMenuComponent, MenuEventArgs} from '@syncfusion/ej2-react-navigations';
import './App.css';
function App() {
  let menuItems = [
    {
        text: 'Cut' ,iconCss:'e-icons e-cut'  
      },
    {
        text: 'Copy'
    },
    {
        text: 'Paste',
        items: [
          {text:'Merge Formatting'},
          {text:'Keep Source Formatting'}
        ]

            },
            {
              text:'Navigate',
             url:'https://ej2.syncfusion.com/react/documentation/introduction'
           }
       ];
       let animation: any = {
        duration: 800,
        effect: 'FadeIn'
      };
      function render(args: MenuEventArgs) {
        args.element.classList.add('custom')
       }
     
  return (
    <div className="App">
     <div id="target">Right click / touch hold to open the Menu</div>
     <ContextMenuComponent target="#target" items={menuItems}  beforeItemRender={render}   
     animationSettings={animation}
     >
     </ContextMenuComponent>
    </div>
  );
}
export default App;