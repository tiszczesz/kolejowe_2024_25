using cw10_layout.Models;
using cw10_layout.Models.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace cw10_layout.Controllers
{
    public class StudentsController : Controller
    {
        private readonly IStudentRepo _studentRepo;
        public StudentsController()
        {
            _studentRepo = new FakeStudentRepo();
        }
        // GET: StudentsController
        public ActionResult List()
        {
            return View(_studentRepo.GetAllStudents());
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(MyStudent student)
        {
            if(ModelState.IsValid){
                _studentRepo.AddStudent(student);
                return RedirectToAction("List");
            }
            return View();
        }

    }
}
