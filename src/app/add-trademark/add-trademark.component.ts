import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-add-trademark',
  templateUrl: './add-trademark.component.html',
  styleUrls: ['./add-trademark.component.css']
})
export class AddTrademarkComponent implements OnInit {

  no_image_url: string;
  image: any;
  imageURL: string;
  
  constructor() {
    this.no_image_url = "../../public/images/none.jpg";
    this.imageURL = "";
   }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
    $('.ui.calendar').calendar( { type: 'date' } );

    $('.ui.form').form({
      fields: {
         fileno: { rules: [ {type:'number', prompt:'File number required'}, {type:'empty', prompt:'File number required'} ] },
         company: { rules: [ {type:'empty', prompt:'Cannot leave company empty'} ] },
         appno: { rules: [ {type:'number', prompt:'Application number required'}, {type:'empty', prompt:'Application number required'} ] },
         trademarkno: { rules: [ {type:'empty', prompt:'Trademark number should be selected'} ] },
         trademarkname: { rules: [ {type:'empty', prompt:'Trademark name should be selected'} ] },
         class: { rules: [ {type:'empty', prompt:'Class should be selected'} ] },
         trademarktype: { rules: [ {type:'empty', prompt:'Trademark type should be selected'} ] },
         
         country: { rules: [ {type:'empty', prompt:'Country should be selected'} ] },
         regtype: { rules: [ {type:'empty', prompt:'Registry type should be selected'} ] },
         agent: { rules: [ {type:'empty', prompt:'Agent should be selected'} ] },
         status: { rules: [ {type:'empty', prompt:'Status should be selected'} ] },
         regdate: { rules: [ {type:'empty', prompt:'Enter a registered date'} ] },
         expiry_date: { rules: [ {type:'empty', prompt:'Enter a expiry date'} ] },
         
        }
    });

  } 

  previewImage(event: any): void {
    if (event.target.files.length>0){
      this.image = event.target.files[0]; 
      let reader: FileReader = new FileReader();
      reader.onloadend = (e => {
          let data: any = e.target;
          this.imageURL = data.result;
      });
      reader.readAsDataURL(this.image);
    }else{
      this.imageURL = "";
    }
  }

  clearImage(): void{
    this.imageURL = "";
  }

  onSubmit(): void {
    let isValid = $('.ui.form').form('is valid');
    console.log(isValid);
    console.log("Triggered");
 
  };

  file_numbers: string[] = ['11245', '01542', '2105'];

  companies: string[] = ['ADP', 'ACH', 'CFRC'];

  trademark_numbers: string[] = ['sd458', 'fg545878', 'er5478'];

  trademark_names: string[] = ['AKILA Tradings', 'GUI Trades', 'TradeXpress'];

  classes: string[] = ['Class 33', 'Class 22', 'Class 19'];

  trademark_types: string[] = ['Electronics', 'Hardware', 'Consumer goods'];

  countries: string[] = ['SL', 'India', 'China', "USA", "Austria"];

  reg_types: string[] = ["Local", "Foreign"];

  agents: string[] = ["a1", "a2", "a3", "a4"];

  status: string[] = ["Pending", "Done", "Accepted"];

}
