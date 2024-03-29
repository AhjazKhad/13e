AFRAME.registerComponent("cursor-listener",{
    schema:{

        selectedItemId:{default:'',type:"string"}
   },
   init:function(){
       this.handleMouseEnterEvents()
       this.handleMouseLeaveEvents()
   },
   handleMouseEnterEvents:function(){
       this.el.addEventListener("mouseenter",()=>{
        console.log("enter")
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal","budapest","new-york-city","eiffel-tower"];
        if (placesId.includes(id)){
            const placesContainer= document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-listener",{
                selectedItemId: id,
            });
            this.el.setAttribute("material",{
                color: "#D76B30",
                opacity:1,
            })

        }

       })
   },
   handleMouseLeaveEvents:function(){
    this.el.addEventListener("mouseleave",()=>{
        console.log("leave")
    const {selectedItemId}= this.data;
    if (selectedItemId){
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if(id== selectedItemId){
            el.getAttribute("matirial",{
                color:"#0077CC",
                opacity: 1,
            })

        }
    }   
    })
}
})