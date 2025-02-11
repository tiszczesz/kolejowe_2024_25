using cw10_layout.Models;
using cw10_layout.Models.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace cw10_layout.Controllers
{
    public class StudentsController : Controller
    {
        private readonly IStudentRepo _studentRepo;
        private readonly string? _connectionString;
        public StudentsController(IConfiguration configuration)
        {
            //_studentRepo = new FakeStudentRepo();
            
            _connectionString = configuration.GetConnectionString("mysql");
            _studentRepo = new MySqlStudentRepo(_connectionString);
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
        public IActionResult Delete(int? id){
            if(id!=null){
                _studentRepo.DeleteStudent(id);

            }
            return RedirectToAction("List");
        }

    }
}
