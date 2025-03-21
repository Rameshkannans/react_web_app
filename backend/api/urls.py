from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.NoteListCreate.as_view(), name="note_list"),
    path('notes/delete/<int:pk>/', views.NoteDelete.as_view(), name="delete_note"),
    path('notes/update/<int:pk>/', views.NoteUpdate.as_view(), name="update_note"),
    # path('profile/', views.UserDetailsInfoView.as_view(), name="user_details_list"),
]
