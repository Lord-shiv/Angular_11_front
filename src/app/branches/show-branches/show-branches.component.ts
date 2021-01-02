import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ShareService } from 'src/app/share.service'
// import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrls: ['./show-branches.component.css']
})
export class ShowBranchesComponent implements OnInit {

  branches: any = [];
  branchName: any; // any
  p: number = 1;

  options = ["All Cities", 'MUMBAI', 'KOLKATA', 'DEHLI', 'CHANDIGARH', 'NOIDA']
  selected: any = "All Cities";
  selectedData: any;


  constructor(private service: ShareService) { }

  ngOnInit(): void {
    // this.refreshBranchList();
    this.service.getBranchList().subscribe((response: any) => {
      this.branches = response;
      this.selectedData = this.branches;
    });
  }

  onSelect(val) {
    // console.log(val)
    this.selectedData = this.branches.filter((x: { city: any; }) => x.city == val)
    if (this.selected == "All Cities") {
      this.selectedData = this.branches
    }
  }


  // refreshBranchList() {
  //   this.service.getBranchList().subscribe(data => {
  //     this.branches = data;
  //   });
  // }


  Search() {
    if (this.branchName && this.branchName !== "") {
      this.branches = this.branches.filter((res: { branchName: string; }) => {
        if (res.branchName == "") {
          return res.branchName.toLocaleLowerCase().match(this.branchName.toLocaleLowerCase());
        }
        else {
          return [];
        }
      })
    } else if (this.branchName == "") {
      this.ngOnInit();
    }
  }
  key: string = 'ifsc_code';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
