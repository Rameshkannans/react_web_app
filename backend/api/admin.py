from django.contrib import admin
from .models import Note, UserDetails
# admin.site.register(Task)

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Note._meta.fields] 

@admin.register(UserDetails)
class UserDetailsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in UserDetails._meta.fields] 
